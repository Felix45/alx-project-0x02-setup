export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
    label: string;
    size: string;
    shape: string;
    onClick: () => void;
}

export interface PostModalProps {
    handleClose: () => void;
    handleCreatePost: (title: string, content: string) => void;
}