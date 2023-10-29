import {render,screen} from "@testing-library/react";
import Home from "@/app/page";


describe("Home",() => {
    it("should have a button",() => {
        render(<Home/>)
        const myElem = screen.getByRole("button")
        expect(myElem).toBeInTheDocument()
    })
})