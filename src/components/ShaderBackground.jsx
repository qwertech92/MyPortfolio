import { useEffect, useRef } from 'react'

const vertexShaderSource = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const fragmentShaderSource = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

varying vec2 v_texCoord;

void main() {
    vec2 uv = v_texCoord;
    
    // Base background color (white)
    vec3 color = vec3(1.0, 1.0, 1.0);
    
    // Subtle Dark Blue for pattern
    vec3 accentColor = vec3(0.043, 0.176, 0.420); // #0B2D6B
    
    // Dot grid pattern - finer and more subtle
    float dots = 0.0;
    vec2 dotPos = fract(uv * 30.0) - 0.5;
    float dist = length(dotPos);
    dots = smoothstep(0.03, 0.02, dist);
    
    // Circuit-like lines with subtle animation
    float lines = 0.0;
    
    // Horizontal lines
    lines += smoothstep(0.0015, 0.0, abs(uv.y - 0.15)) * step(0.05, uv.x) * step(uv.x, 0.35);
    lines += smoothstep(0.0015, 0.0, abs(uv.y - 0.85)) * step(0.6, uv.x) * step(uv.x, 0.95);
    lines += smoothstep(0.0015, 0.0, abs(uv.y - 0.5)) * step(0.7, uv.x) * step(uv.x, 0.9);
    
    // Vertical lines
    lines += smoothstep(0.0015, 0.0, abs(uv.x - 0.15)) * step(0.1, uv.y) * step(uv.y, 0.4);
    lines += smoothstep(0.0015, 0.0, abs(uv.x - 0.35)) * step(0.15, uv.y) * step(uv.y, 0.6);
    lines += smoothstep(0.0015, 0.0, abs(uv.x - 0.85)) * step(0.5, uv.y) * step(uv.y, 0.85);
    lines += smoothstep(0.0015, 0.0, abs(uv.x - 0.6)) * step(0.6, uv.y) * step(uv.y, 0.85);
    
    // Small node circles at line intersections
    float nodes = 0.0;
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.15, 0.15)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.35, 0.15)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.15, 0.4)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.85, 0.85)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.6, 0.85)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.85, 0.5)));
    nodes += smoothstep(0.006, 0.004, length(uv - vec2(0.9, 0.85)));
    
    // Subtle animated pulse on nodes
    float pulse = sin(u_time * 1.5) * 0.5 + 0.5;
    nodes *= (0.7 + 0.3 * pulse);
    
    // Combine patterns with very low opacity for subtlety
    float pattern = dots * 0.15 + lines * 0.4 + nodes * 0.6;
    pattern *= 0.06;
    
    color = mix(color, accentColor, pattern);
    
    gl_FragColor = vec4(color, 1.0);
}`

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

export default function ShaderBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 640, y: 360 })
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    function syncSize() {
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    const resizeObserver = new ResizeObserver(syncSize)
    resizeObserver.observe(canvas)
    syncSize()

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    const prog = gl.createProgram()
    gl.attachShader(prog, createShader(gl, gl.VERTEX_SHADER, vertexShaderSource))
    gl.attachShader(prog, createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_resolution')
    const uMouse = gl.getUniformLocation(prog, 'u_mouse')

    function handleMouseMove(event) {
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width
        const ny = 1.0 - (event.clientY - rect.top) / rect.height
        mouseRef.current.x = nx * canvas.width
        mouseRef.current.y = ny * canvas.height
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    function render(t) {
      syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      if (uMouse) gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animRef.current = requestAnimationFrame(render)
    }
    animRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      resizeObserver.disconnect()
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden opacity-40 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  )
}
