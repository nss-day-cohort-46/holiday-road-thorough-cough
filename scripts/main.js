import { selectPark } from "./parks/ParkSelect.js"
import "./parks/ParkProvider.js"
import { ParkPreview } from "./parks/ParkPreview.js"
import "./attractions/AttractionSelect.js"
import  "./eateries/EaterySelect.js"
import { AttractionPreview } from "./attractions/AttractionPreview.js"
import { EateryPreview } from "./eateries/EateryPreview.js"

ParkPreview()
AttractionPreview()
EateryPreview()
selectPark()
// EateriesDropdown()