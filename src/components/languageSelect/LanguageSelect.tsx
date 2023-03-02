import React, { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext";

export default function LanguageSelect() {
    const { updateLanguage } = useContext(LanguageContext)


    return (
        <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
            </label>
            <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateLanguage?.(e.target.value)}
                id="location"
                name="location"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="Canada"
            >
                <option value={"en"}>EN</option>
                <option value={"tr"}>TR</option>
            </select>
        </div>
    )
}
