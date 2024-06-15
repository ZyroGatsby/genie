import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <header className='inset-0 flex min-h-[80dvh] w-full flex-col items-center justify-center bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]'>
      <div className='mx-auto w-container max-w-full px-5 py-[110px] text-center lg:py-[150px]'>
        <h1 className='text-3xl font-heading md:text-4xl lg:text-5xl'>
          Welcome to <span className='italic'>Genie</span>
        </h1>
        <p className='my-12 mt-8 text-lg font-normal leading-relaxed md:text-xl lg:text-2xl lg:leading-relaxed'>
          Get started by entering what you would like to learn.
          <br /> Check the{' '}
          <a
            target='_blank'
            href='https://github.com/ZyroGatsby/genie.git'
            className='font-heading underline'
          >
            github repo
          </a>{' '}
          for more info.
        </p>
        <Button
          size='lg'
          className='h-10 text-base font-heading md:text-lg lg:h-14 lg:text-xl'
        >
          Get started
        </Button>
      </div>
    </header>
  );
}