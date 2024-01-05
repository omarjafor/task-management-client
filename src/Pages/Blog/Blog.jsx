

const Blog = () => {
    return (
        <div>
            Blog Page
            <ConditionalRander></ConditionalRander>
        </div>
    );
};

export default Blog;



const ConditionalRander = ({ showContent }) => {
    return (
        <div>
            {showContent ? (
                <p>Content is visible.</p>
            ) : (
                <p>Content is hidden.</p>
            )}
        </div>
    );
};
