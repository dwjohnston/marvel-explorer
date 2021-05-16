

import React from 'react';
import { StyledErrorMessage } from './ErrorMessage.styles';

export type ErrorMessageProps = {
    error?: Error | null;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    const { error, } = props;
    return error ? <StyledErrorMessage>
        We're sorry, something went wrong. :(
    </StyledErrorMessage> : null;
};
