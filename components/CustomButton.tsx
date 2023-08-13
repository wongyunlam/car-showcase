'use client';

import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

function CustomButton({
    containerStyles,
    title,
    handleClick,
    btnType,
    textStyle,
    rightIcon,
    isDisabled,
}: CustomButtonProps) {
    return (
        <button
            className={`custom-btn ${containerStyles}`}
            disabled={false}
            type={btnType || 'button'}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyle}`}>{title}</span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    );
}

export default CustomButton;
