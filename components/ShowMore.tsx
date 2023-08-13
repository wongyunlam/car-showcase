'use client';

import React from 'react';
import { showMoreProps } from '@/types';
import { CustomButton } from '.';

function ShowMore({ pageNumber, isNext, setLimit }: showMoreProps) {
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={() => setLimit((pageNumber + 1) * 10)}
                />
            )}
            <div>{isNext}</div>
        </div>
    );
}

export default ShowMore;
