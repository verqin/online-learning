import { Sparkles, Award, Target, Zap, BookOpen } from "lucide-react"

const skillIcons = [Sparkles, Award, Target, Zap, BookOpen]

interface SkillsShowcaseProps {
  skills: string[]
  courseTitle: string
}

export function SkillsShowcase({ skills, courseTitle }: SkillsShowcaseProps) {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-purple-100">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Skills You'll Master
          </h3>
        </div>
        <p className="text-gray-600 ml-13">
          Professional competencies you'll develop through this comprehensive diploma program
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => {
          const Icon = skillIcons[index % skillIcons.length]
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-5 border border-white/60 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-indigo-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Skill Text */}
                <p className="font-semibold text-gray-800 text-sm leading-snug line-clamp-3 group-hover:text-purple-700 transition-colors duration-300">
                  {skill}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom note */}
      <div className="mt-8 pt-6 border-t border-purple-100">
        <p className="text-center text-sm text-gray-600 flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span>
            Each skill is reinforced through practical modules, exercises, and real-world applications
          </span>
          <Sparkles className="w-4 h-4 text-purple-600" />
        </p>
      </div>
    </div>
  )
}
