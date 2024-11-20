

export class RecetasFavoritas {
    constructor(
        public idMeal: string,
        public strMeal: string,
        public strCategory: string,
        public strArea: string,
        public strInstructions: string,
        public strMealThumb: string,
        public strIngredientsMeasures: string[],
        public strYoutube: string | null = null,
        public strSource: string | null = null,
        public tips: string[] | undefined = undefined
    ) {
        this.idMeal = idMeal;
        this.strMeal = strMeal;
        this.strCategory = strCategory;
        this.strArea = strArea;
        this.strInstructions = strInstructions;
        this.strMealThumb = strMealThumb;
        this.strIngredientsMeasures = strIngredientsMeasures;
        this.strYoutube = strYoutube;
        this.strSource = strSource;
        this.tips = tips;
    }
}



