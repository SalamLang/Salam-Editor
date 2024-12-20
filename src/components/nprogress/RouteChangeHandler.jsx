import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const RouteChangeHandler = () => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();

        const timer = setTimeout(() => {
            NProgress.done();
        }, 300);

        return () => clearTimeout(timer);
    }, [location]);

    return null;
};

export default RouteChangeHandler;
