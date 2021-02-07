import { getAttractions, useAttractions } from "./AttractionProvider";


getAttractions().then(() => {
    const attraction = useAttractions()
})
