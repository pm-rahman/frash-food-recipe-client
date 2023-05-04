import ReactPrint from 'react-to-print';
import { useRef } from 'react';
import Blogs from './Blogs';

const BlogPage = () => {
    const ref = useRef()
    return (
        <div className="px-32 py-12">
            <div className='text-right mb-3'>
                <ReactPrint
                    trigger={() => <button>Download PDF</button>}
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