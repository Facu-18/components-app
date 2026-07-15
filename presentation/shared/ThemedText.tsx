import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps{
    className?: string;
    type?: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';
}

const ThemedText = ({
    className,
    type,
    children,
    ...rest
}: Props) => {
  return (
    //className='mt-10 text-3xl text-light-primary dark:text-dark-text'
    <Text 
    className={[
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-bold' : undefined,
        type === 'link' ? 'font-normal underline' : undefined,
        className,
    ].join(' ')}
    {...rest}>
        {children}
    </Text>
  )
}

export default ThemedText