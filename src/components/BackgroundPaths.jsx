/**
 * Background Paths — porte fiel do componente da KokonutUI
 * Original: @author @dorianbaffier — https://kokonutui.com/docs/backgrounds/background-paths
 * Convertido de TypeScript para JavaScript (sem alterar lógica, parâmetros ou timing).
 * Aqui é exportado apenas o "FloatingPaths" (a camada visual da animação), para uso
 * como background de uma seção existente — o wrapper de demo original (título, tela cheia)
 * não faz parte da animação em si e não é usado aqui.
 */

import { motion, useReducedMotion } from 'motion/react'
import { memo, useMemo } from 'react'

// Path generation function
function generateAestheticPath(index, position, type) {
  const baseAmplitude = type === 'primary' ? 150 : type === 'secondary' ? 100 : 60
  const phase = index * 0.2
  const points = []
  const segments = type === 'primary' ? 10 : type === 'secondary' ? 8 : 6

  const startX = 2400
  const startY = 800
  const endX = -2400
  const endY = -800 + index * 25

  for (let i = 0; i <= segments; i++) {
    const progress = i / segments
    const eased = 1 - (1 - progress) ** 2

    const baseX = startX + (endX - startX) * eased
    const baseY = startY + (endY - startY) * eased

    const amplitudeFactor = 1 - eased * 0.3
    const wave1 =
      Math.sin(progress * Math.PI * 3 + phase) * (baseAmplitude * 0.7 * amplitudeFactor)
    const wave2 =
      Math.cos(progress * Math.PI * 4 + phase) * (baseAmplitude * 0.3 * amplitudeFactor)
    const wave3 =
      Math.sin(progress * Math.PI * 2 + phase) * (baseAmplitude * 0.2 * amplitudeFactor)

    points.push({
      x: baseX * position,
      y: baseY + wave1 + wave2 + wave3,
    })
  }

  const pathCommands = points.map((point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`
    const prevPoint = points[i - 1]
    const tension = 0.4
    const cp1x = prevPoint.x + (point.x - prevPoint.x) * tension
    const cp1y = prevPoint.y
    const cp2x = prevPoint.x + (point.x - prevPoint.x) * (1 - tension)
    const cp2y = point.y
    return `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`
  })

  return pathCommands.join(' ')
}

const generateUniqueId = (prefix) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`

// Memoized FloatingPaths component
const FloatingPaths = memo(function FloatingPaths({ position }) {
  const prefersReducedMotion = useReducedMotion()

  // Increased number of paths while maintaining optimization
  const primaryPaths = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: generateUniqueId('primary'),
        d: generateAestheticPath(i, position, 'primary'),
        opacity: 0.15 + i * 0.02,
        width: 4 + i * 0.3,
        duration: 25,
        delay: 0,
      })),
    [position]
  )

  const secondaryPaths = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: generateUniqueId('secondary'),
        d: generateAestheticPath(i, position, 'secondary'),
        opacity: 0.12 + i * 0.015,
        width: 3 + i * 0.25,
        duration: 20,
        delay: 0,
      })),
    [position]
  )

  const accentPaths = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: generateUniqueId('accent'),
        d: generateAestheticPath(i, position, 'accent'),
        opacity: 0.08 + i * 0.12,
        width: 2 + i * 0.2,
        duration: 15,
        delay: 0,
      })),
    [position]
  )

  // Shared animation configuration
  const sharedAnimationProps = {
    opacity: 1,
    scale: 1,
  }
  const sharedTransition = {
    opacity: { duration: 1 },
    scale: { duration: 1 },
  }

  // The continuous y-drift is purely decorative — skip it under
  // prefers-reduced-motion and keep only the one-time entrance fade.
  const drift = (amplitude, duration) =>
    prefersReducedMotion
      ? { animate: {}, transition: {} }
      : {
          animate: { y: [0, -amplitude, 0] },
          transition: {
            y: { duration, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', repeatType: 'reverse' },
          },
        }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <svg
        className="h-full w-full text-slate-950/40 dark:text-white/40"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="-2400 -800 4800 1600"
      >
        <title>Background Paths</title>
        <defs>
          <linearGradient id="sharedGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="rgb(var(--color-accent) / 0.6)" />
            <stop offset="50%" stopColor="rgb(var(--color-accent) / 0.35)" />
            <stop offset="100%" stopColor="rgb(var(--color-accent) / 0.6)" />
          </linearGradient>
        </defs>

        <g className="primary-waves">
          {primaryPaths.map((path) => (
            <motion.path
              animate={{
                ...sharedAnimationProps,
                ...drift(15, 8).animate,
              }}
              d={path.d}
              initial={{ opacity: 0, scale: 0.8 }}
              key={path.id}
              stroke="url(#sharedGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              transition={{
                ...sharedTransition,
                ...drift(15, 8).transition,
              }}
            />
          ))}
        </g>

        <g className="secondary-waves" style={{ opacity: 0.8 }}>
          {secondaryPaths.map((path) => (
            <motion.path
              animate={{
                ...sharedAnimationProps,
                ...drift(10, 6).animate,
              }}
              d={path.d}
              initial={{ opacity: 0, scale: 0.9 }}
              key={path.id}
              stroke="url(#sharedGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              transition={{
                ...sharedTransition,
                ...drift(10, 6).transition,
              }}
            />
          ))}
        </g>

        <g className="accent-waves" style={{ opacity: 0.6 }}>
          {accentPaths.map((path) => (
            <motion.path
              animate={{
                ...sharedAnimationProps,
                ...drift(5, 4).animate,
              }}
              d={path.d}
              initial={{ opacity: 0, scale: 0.95 }}
              key={path.id}
              stroke="url(#sharedGradient)"
              strokeLinecap="round"
              strokeWidth={path.width}
              style={{ opacity: path.opacity }}
              transition={{
                ...sharedTransition,
                ...drift(5, 4).transition,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
})

// Exporta apenas a camada de animação (FloatingPaths), pronta para ser usada
// como background de qualquer seção existente.
export default memo(function BackgroundPaths() {
  return <FloatingPaths position={1} />
})
