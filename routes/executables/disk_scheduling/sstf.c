#include<stdio.h>
#include<math.h>
#include<stdlib.h>
#include<string.h>
main(int argc, char **argv)
{
	int n,r,totseek=0,prev,cur,min,pos,ct=0,completed=0,size;
	int req[10],seq[10],done[10]={0};
	size = atoi(argv[1]);
	n = argc - 4;
	
	int temp,i,j;
	for(i=4;i<argc;i++)
	req[ct++] = atoi(argv[i]);
	
	ct=0;
	
	cur = atoi(argv[2]);
	prev = atoi(argv[3]);
	
	temp = cur;
	while(completed<n)
	{	min = 9999;
	for(i=0;i<n;i++)
	{
		if( done[i] == 0 && abs(req[i]-cur)<min)
		{
			pos = i;
			min = abs(req[i]-cur);
		}
	}
	completed++;
	seq[ct++]=req[pos];
	done[pos] = 1;
	totseek += abs(req[pos] - cur);
	cur = req[pos];
	}
	
	
	//printf("Sequence of movement is: ");
	printf("%d ",temp);
	for(i=0;i<n;i++)
	printf("%d ",seq[i]);
	printf("\n%d\n%f\n",totseek,(float)totseek/n);
	
}
