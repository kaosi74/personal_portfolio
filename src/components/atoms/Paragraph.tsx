type ParagraphProps = {
  children: React.ReactNode;
  className: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
}) => {
  return <p className={`text-lg ${className}`}>{children}</p>;
};
