
import { signOut } from "@/auth"
import { FiLogOut } from "react-icons/fi"

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button
              className="border rounded-full bg-gray-200 text-primary p-1"

      type="submit">
        <FiLogOut size={26} />
      </button>
    </form>
  )
}