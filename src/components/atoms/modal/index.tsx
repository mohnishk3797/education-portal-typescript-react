import React, { ReactElement } from 'react';
import Dialog from '@material-ui/core/Dialog';

interface Props {
  open: boolean;
  handleClose: () => void;
  maxWidth: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
  children: any;
}

export default function ModalAtom({
  open,
  handleClose,
  maxWidth,
  children,
}: Props): ReactElement {
  return (
    <Dialog maxWidth={maxWidth} open={open} onClose={handleClose} fullWidth>
      {children}
    </Dialog>
  );
}
