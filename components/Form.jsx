import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
        <h1 className="head_text text-left">
            <span className="purple_gradient">{type} Prompt</span>
        </h1>
        <p className="desc text-left max-w-md">
            {type} & share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
            <label>
                <span className="font-satoshi font-semibold text-base text-gray-300">Your AI Prompt</span>
                <textarea
                    value={post.prompt}
                    onChange={(e) => setPost({ ...post, prompt: e.target.value})}
                    placeholder="Write your prompt here..."
                    className="form_textarea"
                    required
                />
            </label>
            <label>
                <span className="font-satoshi font-semibold text-base text-gray-300">
                    Tag <span className="font-normal">(#product, #webdev, #idea)</span>
                </span>
                <input
                    value={post.tag}
                    onChange={(e) => setPost({ ...post, tag: e.target.value})}
                    placeholder="#tag"
                    className="form_input"
                    required
                />
            </label>
            <div className="flex-end mx-3 mb-2 gap-4">
                <Link href="/" className="text-gray-300 text-sm">
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-1.5 text-sm bg-violet-500 rounded-full text-white"
                >
                    {submitting? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Form