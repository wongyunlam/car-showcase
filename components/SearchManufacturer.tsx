'use client';

import { useState, Fragment } from 'react';
import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types';

import { manufacturers } from '@/constants';

function SearchManufacturer({
    selected,
    setSelected,
}: SearchManufacturerProps) {
    const [query, setQuery] = useState('');

    const filteredManufacturers =
        query === ''
            ? manufacturers
            : manufacturers.filter((manufacturer) =>
                  manufacturer
                      .toLowerCase()
                      .replace(/\s+/g, '')
                      .includes(query.toLowerCase().replace(/\s+/g, ''))
              );

    return (
        <div className="search-manufacturer">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            className="ml-4"
                            src="/car-logo.svg"
                            alt="car-logo"
                            width={20}
                            height={20}
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in-out duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options>
                            {filteredManufacturers.length === 0 &&
                            query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredManufacturers.map((el) => (
                                    <Combobox.Option
                                        key={el}
                                        value={el}
                                        className={({ active }) =>
                                            `relative search-manufacturer__option ${
                                                active
                                                    ? 'bg-primary-blue text-white'
                                                    : 'text-gray-900'
                                            }`
                                        }
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? 'font-medium'
                                                            : 'font-normal'
                                                    }`}
                                                >
                                                    {el}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? 'text-white'
                                                                : 'text-teal-600'
                                                        }`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
}

export default SearchManufacturer;
