import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { resumeConfig } from '@/data/resume-config'
import { assetUrl } from '@/lib/utils'
import { detectedAssets } from 'virtual:detected-assets'
import { SidebarSection } from './SidebarSection'
import { ContactItem } from './ContactItem'
import { SkillCategory } from './SkillCategory'
import { TechBadge } from './TechBadge'

const PHOTO_ANIMATION_DURATION = 0.8

function SidebarPhoto({ photo, name, emoji }: { photo?: string; name: string; emoji?: string }) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleFlip = () => {
    if (isSpinning) return
    setIsSpinning(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleFlip()
    }
  }

  if (!photo || hasError) {
    return (
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center border-4 border-resume-bg/30 shadow-lg">
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center mb-6" style={{ perspective: '300px' }}>
      {/* Print-only static photo */}
      <img
        src={photo}
        alt={`Profile photo of ${name}`}
        className="hidden print:block w-32 h-32 rounded-full border-4 border-gray-200 object-cover"
      />

      {/* Screen-only interactive photo */}
      <motion.div
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        onAnimationComplete={() => setIsSpinning(false)}
        animate={{ rotateY: isSpinning ? 360 : 0 }}
        transition={{ duration: PHOTO_ANIMATION_DURATION, ease: 'easeInOut' }}
        className="relative w-32 h-32 cursor-pointer print:hidden"
        style={{ transformStyle: 'preserve-3d' }}
        role="button"
        tabIndex={0}
        aria-label={`Photo of ${name} — click to flip`}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden border-4 border-resume-bg/30 shadow-lg"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={photo}
            alt={`Profile photo of ${name}`}
            className="object-cover w-full h-full"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        </div>
        <div
          className="absolute inset-0 rounded-full border-4 border-resume-bg/30 shadow-lg bg-gradient-to-br from-resume-primary to-resume-primary-light flex items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <span className="text-4xl">{emoji || '👨‍💻'}</span>
        </div>
      </motion.div>
    </div>
  )
}

export function Sidebar() {
  const { resolve } = useTranslation()
  const { personal, contact, skills, hobbies, labels } = resumeConfig

  return (
    <div className="md:w-[38%] bg-gradient-to-b from-resume-sidebar-from to-resume-sidebar-to p-8">
      {/* Photo / Profile image — priority: config > auto-detected > emoji fallback */}
      <SidebarPhoto
        photo={(personal.photo || detectedAssets.photo) ? assetUrl(personal.photo || detectedAssets.photo!) : undefined}
        name={personal.name}
        emoji={personal.photoBackEmoji}
      />

      {/* Contact */}
      <SidebarSection title={resolve(labels.sections.contact)}>
        <div className="space-y-3">
          {contact.map((item) => (
            <ContactItem key={`${item.type}-${item.label}`} type={item.type} label={item.label} href={item.href} />
          ))}
        </div>
      </SidebarSection>

      {/* Skills */}
      <SidebarSection title={resolve(labels.sections.skills)}>
        <div className="space-y-4">
          {skills.map((category, i) => (
            <SkillCategory key={`${resolve(category.title)}-${i}`} title={resolve(category.title)}>
              {category.type === 'badges' && (
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item) => {
                    const techName = typeof item.name === 'string' ? item.name : Object.values(item.name)[0]
                    return <TechBadge key={techName} tech={techName} color={item.color} />
                  })}
                </div>
              )}
              {category.type === 'text' && (
                <p className="text-xs text-resume-text-secondary">
                  {category.items
                    .map((item) => (typeof item.name === 'string' ? item.name : resolve(item.name)))
                    .join(', ')}
                </p>
              )}
              {category.type === 'languages' && (
                <div className="flex items-center gap-3 text-sm flex-wrap">
                  {category.items.map((item, j) => {
                    const name = typeof item.name === 'string' ? item.name : resolve(item.name)
                    return (
                      <span key={`${name}-${j}`} className="flex items-center gap-1">
                        <span className="text-resume-text-secondary">
                          {name} {item.level ? resolve(item.level) : ''}
                          {item.details && (
                            <span className="text-xs opacity-70 ml-1">{item.details}</span>
                          )}
                        </span>
                      </span>
                    )
                  })}
                </div>
              )}
            </SkillCategory>
          ))}
        </div>
      </SidebarSection>

      {/* Hobbies */}
      {hobbies && hobbies.length > 0 && labels.sections.hobbies && (
        <SidebarSection title={resolve(labels.sections.hobbies)}>
          <div className="grid grid-cols-2 gap-3">
            {hobbies.map((hobby, i) => (
              <div key={`${resolve(hobby.title)}-${i}`}>
                <p className="font-medium text-sm text-resume-text">{resolve(hobby.title)}</p>
                {hobby.details?.map((detail, j) => (
                  <p key={j} className="text-xs text-resume-text-secondary">
                    {resolve(detail)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </SidebarSection>
      )}
    </div>
  )
}
