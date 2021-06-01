import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import { ThreeDButton } from '@/components/ThreeDButton'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <h3>TrendingChinese is the hippest way to learn Chinese.</h3>
            <p>
              We email you a 400-character <strong>summary</strong> of what's{' '}
              <strong>
                trending{' '}
                <span role="img" aria-label="Fire emoji">
                  🔥
                </span>{' '}
                on Weibo
              </strong>{' '}
              and the Chinese Internet, written in Mandarin Chinese, specially for{' '}
              <strong>Chinese learners</strong>!
            </p>
            <p>
              We also provide <strong>English-language explanations</strong> of the latest Chinese
              Internet slang (e.g. "社死“) along with other vocab that would be new to many Chinese
              learners.
            </p>
            <p>
              It's targeted towards intermediate learners and above, but{' '}
              <strong>brave beginners</strong> are welcome to dip their toes in. You'll learn a ton!
            </p>
            <p>
              Let's get this party started{' '}
              <span role="img" aria-label="Fire emoji">
                🎉
              </span>{' '}
              !
            </p>
          </div>
          <div className="flex flex-col items-center pt-8 space-x-2">
            <ThreeDButton href="https://trendingchinese.substack.com/about">Subscribe</ThreeDButton>
          </div>
        </div>
      </div>
    </>
  )
}
