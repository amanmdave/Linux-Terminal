#include<stdio.h>
#include<string.h>
#include<stdlib.h>

main(int argc, char **argv)
{
	int dir,n,r,totseek=0,prev,cur,ct=0,size;
	int req[10],seq[10];
	size = atoi(argv[1]);
	n = argc - 4;
	int temp,i,j;
	for(i=4;i<argc;i++)
	req[ct++] = atoi(argv[i]);
	
	ct=0;
	
	cur = atoi(argv[2]);
	prev = atoi(argv[3]);
	
	if(cur > prev)
	dir = 1;
	else
	dir=0;
	
	for(i=0;i<n-1;i++)
	for(j=0;j<n-1-i;j++)
	if(req[j]>req[j+1])
	{
		temp = req[j];
		req[j]=req[j+1];
		req[j+1] = temp;
	}
	if(dir)
	{
		
		totseek = 2*(size-cur) + (cur-req[0]);
		
		for(i=0;i<n;i++)
		{
			if(req[i]<cur)
			continue;
			else
			{
				seq[ct++] = req[i];
			}
		}
		for(i=n-1;i>=0;i--)
		{
			if(req[i]>cur)
			continue;
			else
			{
				seq[ct++] = req[i];
			}
		}
		
	}
	else
	{
		totseek = 2*(cur) + (req[n-1]-cur);
		
		for(i=n-1;i>=0;i--)
		{
			if(req[i]>cur)
			continue;
			else
			{
				seq[ct++] = req[i];
			}
		}
		for(i=0;i<n;i++)
		{
			if(req[i]<cur)
			continue;
			else
			{
				seq[ct++] = req[i];
			}
		}
		
		
	}
	
	
	//printf("Sequence of movement is: ");
	printf("%d ",cur);
	for(i=0;i<n;i++)
	printf("%d ",seq[i]);
	printf("\n%d\n%f\n",totseek,(float)totseek/n);
	
	
}
