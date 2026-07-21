import { useMouseGlow } from '../../hooks/useMouseGlow'

/** Ambient mouse-follow glow overlay */
export default function MouseGlow() {
  const { x, y } = useMouseGlow()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] transition-transform duration-300 ease-out"
        style={{
          background:
            'radial-gradient(circle, #6366F1 0%, #06B6D4 40%, transparent 70%)',
          transform: `translate(${x - 300}px, ${y - 300}px)`,
        }}
      />
    </div>
  )
}
