import ReactPrint from 'react-to-print';
import { useRef } from 'react';
import Blogs from './Blogs';

const BlogPage = () => {
    const ref = useRef()
    return (
        <div className="mx-32 py-12 border-t">
            <div className='text-right mb-3'>
                <ReactPrint
                    trigger={() => <button className='underline'>Download PDF</button>}
                    content={() => ref.current}
                />
            </div>
            <div ref={ref}>
                <Blogs />
            </div>
        </div>
    );
};

export default BlogPage;