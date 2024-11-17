
interface Props {
    title: string;
    description: string;
}

const HeadingText = ({title, description}: Props) => {
  return (
    <div className="flex flex-col space-y-1">
        <h1 className="text-xl font-bold tracking-tighter leading-tight">{title}</h1>
        <p className="font-medium text-gray-600">{description}</p>
    </div>
  )
}

export default HeadingText