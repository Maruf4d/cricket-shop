

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center w-4/12 mx-auto my-5">
            <p className="text-yellow-500">--- {subHeading} ---</p>
            <h3 className="text-3xl font-bold border-y-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;