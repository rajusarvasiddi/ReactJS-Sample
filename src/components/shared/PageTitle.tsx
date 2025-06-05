import { useEffect } from 'react'

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title }) => {
    // const location = useLocation();

    useEffect(() => {
        if (title) {
            document.title = `${title} - React App`;
        }
    }, [title]);

    return null;
};

export default PageTitle;