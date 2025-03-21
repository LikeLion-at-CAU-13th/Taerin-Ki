#include <stdio.h>

int main()
{
	int dan, y;
	dan = 2;
	while (dan < 10) {
		printf("%d´Ü\n", dan);
		y = 1;
		while (y < 10) {
			printf("%d * %d = %d\n", dan, y, dan * y);
			y++;
		}
		printf("\n\n");
		dan++;
	}
}