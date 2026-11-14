export default function Button({ children, variant = 'primary', size = 'md' }) {
    return <button className={`btn btn-${variant} btn-${size}`}>{children}</button>
}