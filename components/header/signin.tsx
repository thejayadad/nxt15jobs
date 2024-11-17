
import { signIn } from "@/auth"
import { FiUser } from "react-icons/fi"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button
        className="border rounded-full bg-gray-200 text-primary"
      type="submit">
        <FiUser size={26} />
      </button>
    </form>
  )
}