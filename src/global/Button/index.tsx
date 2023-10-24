
const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="flex px-4 py-2 bg-blue-primary text-white gap-2 rounded-md">
      {props.children}
    </button>
  )
}

export default Button