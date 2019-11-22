#include <stdio.h> 
#include <sys/types.h> 
#include <unistd.h> 
int main(int argc, char const *argv[]) { 

	// make two process which run same 
	// program after this instruction

	int i, ct=1;
	int n=atoi(argv[2]);
	if(strcmp(argv[1],"./fork")==0){
		for(i=0;i<n;i++){
			ct *=2; 
		}
	}

	printf("%d process created \n", ct);

	return 0; 
} 
