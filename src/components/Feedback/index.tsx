import { lazy, Suspense } from 'react';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

const fallback = <div style={{ background: '#ddd', width: 24, height: 24 }}/>

interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon />
    </Suspense>
  );
}

interface FeedbackProps {
  text: string,
  icon: string,
}

const Feedback = ({ text, icon }: FeedbackProps) => {

  return (
    <div className="w-full max-w-sm flex flex-col items-center justify-center h-auto space-x-2 mt-4">
      <Icon name={icon as IconProps["name"]} />
      <p className="text-center">{text}</p>
    </div>
  )
}

export default Feedback

