#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

void palindrome(char munjayeol[])
{
	int len = 0;

	while (munjayeol[len] != '\0') {
		len++;
	}

	int a = 0;	// �� ��
	int b = len-1;	// �� ��
	
	while (a < b) {
		if (munjayeol[a] != munjayeol[b]) {
			printf("ȸ���� �ƴմϴ�.");
			return;	// ȸ���� �ƴ� ��� ��� ��� �� �����ؾ� ��.
		}
		a++;
		b--;
	}
	printf("ȸ�� �Դϴ�.");	  // ������ ������ �� �ٸ��� ������ ȸ��!
}

int main()
{
	char munjayeol[100];
	printf("���ڿ� �Է�: ");
	scanf("%s", munjayeol);
	printf("\n");
	palindrome(munjayeol);
}