"use client"

import { postEntry } from "../action"

export default function Form() {
    return (
        <form action={async (formData) => {
            await postEntry(formData)
        }} className="relative flex items-center text-sm mb-5">
            <input type="text" placeholder="Your Message" name="entry" id="entry" required className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" />
            <button className="flex items-center justify-center absolute right-2 mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16" type="submit">
                Send
            </button>
        </form>
    )
} 