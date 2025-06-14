export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    handleClose: () => void;
    handleCreatePost: (title: string, content: string) => void;
}