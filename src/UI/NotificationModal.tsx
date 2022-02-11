import { Backdrop, Content } from './ModalNotification';
import { Button } from '../UI/Button';

interface ErrorModelProps {
  title: string;
  message: string;
  onConfirm: ()=> void;
}

export function NotificationModal({ title, message, onConfirm }: ErrorModelProps) {
  return(
    <>
      <Backdrop
        onClick={onConfirm}
      />
      <Content>
        <header>
          <h2>{title}</h2>
        </header>
        <div>
          <p>{message}</p>
        </div>
        <footer>
          <Button
            type='button'
            onClick={onConfirm}
          >
            Okay
          </Button>
        </footer>
      </Content>
    </>
  )
}