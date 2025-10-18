import { CheckCircleIcon, LockClosedIcon, EyeIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Transparent Voting',
    description: 'Our blockchain-based system ensures that every vote is recorded and publicly verifiable, eliminating any chance of tampering.',
    icon: EyeIcon,
  },
  {
    name: 'Enhanced Security',
    description: 'With advanced cryptographic techniques, our platform provides a secure environment for casting and counting votes.',
    icon: LockClosedIcon,
  },
  {
    name: 'User-Friendly Interface',
    description: 'A simple and intuitive design makes it easy for anyone to vote, regardless of their technical expertise.',
    icon: CheckCircleIcon,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to vote
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform is designed to make voting simple, secure, and transparent. Here's how we do it.
          </p>
        </div>

        <div className="mt-20 flex items-center justify-center">
          <div className="w-full lg:w-1/2">
            <dl className="space-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="hidden lg:block lg:w-1/2 ml-10">
            <img src="https://cdn.dribbble.com/users/1293592/screenshots/4850388/media/b134b34179c394589d936168d067423e.gif" alt="Feature Animation" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
