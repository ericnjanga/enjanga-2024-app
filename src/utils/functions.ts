

export const setLinkActive = ({ isActive }: { isActive: boolean }) => isActive ? 'link-active' : '';


export const logErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.log(`An unknown error occured `, error);
  }
}