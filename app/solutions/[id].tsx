// // pages/solutions/[id].tsx

// import { useRouter } from 'next/router';
// // import DigitalSolutions from '../components/DigitalSolutions';
// import DigitalSolutions from '../components/DigitalSolutions';

// const SolutionPage: React.FC = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Ensure id is a string
//   const solutionId = typeof id === 'string' ? id : '';

//   // Find the selected solution based on the id
//   const selectedSolution = DigitalSolutions.find((solution) => solutionId === solution.name.toLowerCase().replace(/\s/g, '-'));

//   if (!selectedSolution) {
//     return <p>Solution not found</p>;
//   }

//   return (
//     <div className="container mx-auto py-16">
//       <h2 className="text-4xl font-extrabold mb-8">{selectedSolution.name}</h2>
//       <div className="flex justify-center">
//         <img src={selectedSolution.image} alt={selectedSolution.name} className="w-64 h-64 object-cover rounded-md" />
//       </div>
//       <p className="text-gray-700 mt-4">{selectedSolution.description}</p>
//     </div>
//   );
// };

// export default SolutionPage;
