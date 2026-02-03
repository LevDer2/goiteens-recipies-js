import { FaBeer } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { IoFastFood } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdTimer } from "react-icons/md";
import RecipeInfo from "./RecipeInfo";

function Recipe({ recipe }) {
  console.log(recipe);
  return (
    <ul>{recipe.map(({ name, time, servings, calories, difficulty, image }, index) => {
        return (
            <li key={index}>
                <img width={300} src={image} alt={name} />
                <h2>{name}</h2>
                {/* <p>{time}</p>
                <p>{servings}</p>
                <p>{calories}</p>
                <p>{difficulty}</p> */}
                <RecipeInfo text={`time: ${time} min`} icons={<MdTimer />}/>
                <RecipeInfo text={`servings: ${servings} peoples`} icons={<FaPeopleGroup />}/>
                <RecipeInfo text={`calories: ${calories}`} icons={<IoFastFood />}/>
                <RecipeInfo text={`difficulty: How much hard ${difficulty}`} icons={<IoIosFitness />}/>
            </li>
        )
    })}</ul>
  );
}

export default Recipe;
