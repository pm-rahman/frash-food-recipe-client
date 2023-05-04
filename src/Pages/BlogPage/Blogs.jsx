const Blogs = () => {

    return (
        <div>
            <div className='px-12 rounded-sm sm:px-20 md:px-32 py-12 bg-slate-100'>
                <div className="bg-slate-50 mb-4 border rounded-md py-4 px-6">
                    <h4 className="mb-2 text-xl font-normal">Differences between uncontrolled and controlled components.</h4>
                    <p className="mb-4 font-normal">
                        <span>Controlled component : </span> Controlled components parents components controlled their behavior by the props. <br />
                        <span>Uncontrolled component: </span> Uncontrolled component are independent the control their stat their self.
                    </p>
                </div>
                <div className="bg-slate-50 mb-4 border rounded-md py-4 px-6">
                    <h4 className="mb-2 mt-4 text-xl font-normal">How to validate React props using PropTypes</h4>
                    <p className="mb-4 font-normal">
                        PropTypes using for check typechecking <br />
                        <span>Example : </span>
                        PropTypes.any : The prop can be of any data type <br />
                        <span>We can also check Object and array data type</span>
                        PropsTypes.array, PropsTypes.object <br />
                        When props are passed to a React component, they are checked by propTypes. When an invalid value is passed for a prop, a warning is displayed on the console
                    </p>
                </div>
                <div className="bg-slate-50 mb-4 border rounded-md py-4 px-6">
                    <h4 className="mb-2 mt-4 text-xl font-normal">Tell us the difference between nodejs and express js.</h4>
                    <p className="mb-4 font-normal">
                        <span>Node js : </span> Open source and cross-platform, it's execute javascript code out site the browser. basically people use Node.js for building back-end services like APIs like Web App or Mobile App. <br />
                        <span>Express js : </span> is a framework that sits on the Node.Js, is's allow us to simplify our web server and add new feature easily
                    </p>
                </div>
                <div className="bg-slate-50 mb-4 border rounded-md py-4 px-6">
                    <h4 className="mb-2 mt-4 text-xl font-normal">What is a custom hook, and why will you create a custom hook?</h4>
                    <p className="mb-4 font-normal">
                        <span>Custom : </span> Custom hook spatial javascript function whose name start with use<br />
                        <span>Why we use : </span> Hooks allow function components to have access to state and other React features. Using hooks for this work is much easier then others
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;