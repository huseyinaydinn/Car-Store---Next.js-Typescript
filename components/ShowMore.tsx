"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import { CustomButton } from "@/components"

const ShowMore = ({ pageNumber, isNextPage, setLimit }: ShowMoreProps) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        setLimit(newLimit)
    }
    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNextPage && (
                    <CustomButton
                        title="Show More"
                        btnType="button"
                        containerStyles="bg-primary-blue rounded-full text-white"
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    )
}

export default ShowMore