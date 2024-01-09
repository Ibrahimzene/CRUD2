import { useContext } from "react";
import { AppContext } from "../AppContext";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const PageManageFlashcards = () => {
	const { flashcards } = useContext(AppContext);
	return (
		<>
		<p>There are {flashcards.length} flashcards:</p>

		<table className="dataTable mt-4">
				<thead>
					<tr>
						<th>SUUID</th>
						<th>Category</th>
						<th>Front</th>
						<th>Back</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{flashcards.map(flashcard => {
						return (
							<tr key={flashcard.suuid}>
								<td>{flashcard.suuid}</td>
								<td>{flashcard.category}</td>
								<td>{flashcard.front}</td>
								<td>{flashcard.back}</td>
								<td>
								<div className="flex"></div>	
									<MdModeEditOutline /><RiDeleteBin6Line /></td>
							</tr>
						)
					})}
				</tbody>
		</table>
		</>
	)
}
