export interface Props{
    onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
    text: string;
    disabled?: boolean;
}