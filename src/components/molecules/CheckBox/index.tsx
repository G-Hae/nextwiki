import { CheckBoxIcon, CheckBoxOutlineBlankIcon } from '@/components/atoms/IconButton';
import Text from '@/components/atoms/Text';
import Flex from '@/components/layout/Flex';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
    label?: string;
}

const CheckBoxElement = styled.input`
    display: none;
`;

const Label = styled.label`
    cursor: pointer;
    margin-left: 6px;
    user-select: none;
`;

/**
 * 체크 박스
 */
const CheckBox = (props: CheckBoxProps) => {
    const { id, label, onChange, checked, ...rest } = props;
    const [isChecked, setIsChecked] = useState(checked);
    const ref = useRef<HTMLInputElement>(null);
    const onClick = useCallback(
        (e: React.MouseEvent) => {
            e.preventDefault();
            ref.current?.click();
            setIsChecked((isChecked) => !isChecked);
        },
        [ref, setIsChecked]
    );

    useEffect(() => {
        setIsChecked(checked ?? false);
    }, [checked]);

    return (
        <>
            <CheckBoxElement
                {...rest}
                ref={ref}
                type="checkbox"
                checked={isChecked}
                readOnly={!onChange}
                onChange={onChange}
            />
            <Flex alignItems="center">
                {/* 체크 박스 ON/OFF 그리기 */}
                {(checked ?? isChecked) ? (
                    <CheckBoxIcon size={20} onClick={onClick} />
                ) : (
                    <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
                )}
                {/* 체크 박스 라벨 */}
                {label && label.length > 0 && (
                    <Label htmlFor={id} onClick={onClick}>
                        <Text>{label}</Text>
                    </Label>
                )}
            </Flex>
        </>
    );
};

export default CheckBox;
