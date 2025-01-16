const useYearsOfExperience = (startingDate = new Date("10/01/2019")) => {
  const yearsOfExperience =
    new Date().getFullYear() - startingDate.getFullYear() - 1;

  return { yearsOfExperience };
};

export default useYearsOfExperience;
