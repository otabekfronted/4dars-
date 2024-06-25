// import "./index.css";

function Form() {
    return (
        <>
            <h1>Send Us Question</h1>
            <hr />
            <div className=" w-full w-80 m-0 m-auto pt-4">
                <form>
                    <label className="form-control">
                        <span>Your Email:</span>
                        <input type="text" />
                    </label>
                    <label className="form-control">
                        <span>Your Email:</span>
                        <textarea></textarea>
                    </label>
                    <button className="button">Send</button>
                </form>
            </div>
        </>
    );
}

export default Form;
